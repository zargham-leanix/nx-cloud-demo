import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo23Component } from './lib70-demo23.component';

describe('Lib70Demo23Component', () => {
  let component: Lib70Demo23Component;
  let fixture: ComponentFixture<Lib70Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
