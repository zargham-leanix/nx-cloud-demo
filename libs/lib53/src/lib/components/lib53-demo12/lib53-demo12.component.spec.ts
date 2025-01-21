import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo12Component } from './lib53-demo12.component';

describe('Lib53Demo12Component', () => {
  let component: Lib53Demo12Component;
  let fixture: ComponentFixture<Lib53Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
