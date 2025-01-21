import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo12Component } from './lib78-demo12.component';

describe('Lib78Demo12Component', () => {
  let component: Lib78Demo12Component;
  let fixture: ComponentFixture<Lib78Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
