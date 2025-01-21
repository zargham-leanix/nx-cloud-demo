import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo12Component } from './lib28-demo12.component';

describe('Lib28Demo12Component', () => {
  let component: Lib28Demo12Component;
  let fixture: ComponentFixture<Lib28Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
