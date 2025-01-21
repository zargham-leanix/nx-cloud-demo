import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo12Component } from './lib30-demo12.component';

describe('Lib30Demo12Component', () => {
  let component: Lib30Demo12Component;
  let fixture: ComponentFixture<Lib30Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
