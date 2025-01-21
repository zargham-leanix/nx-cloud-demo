import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo15Component } from './lib48-demo15.component';

describe('Lib48Demo15Component', () => {
  let component: Lib48Demo15Component;
  let fixture: ComponentFixture<Lib48Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
