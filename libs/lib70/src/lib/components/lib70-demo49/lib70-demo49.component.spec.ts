import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo49Component } from './lib70-demo49.component';

describe('Lib70Demo49Component', () => {
  let component: Lib70Demo49Component;
  let fixture: ComponentFixture<Lib70Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
