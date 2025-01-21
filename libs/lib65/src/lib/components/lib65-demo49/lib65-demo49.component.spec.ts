import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo49Component } from './lib65-demo49.component';

describe('Lib65Demo49Component', () => {
  let component: Lib65Demo49Component;
  let fixture: ComponentFixture<Lib65Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
