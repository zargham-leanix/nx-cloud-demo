import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo38Component } from './lib70-demo38.component';

describe('Lib70Demo38Component', () => {
  let component: Lib70Demo38Component;
  let fixture: ComponentFixture<Lib70Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
