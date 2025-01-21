import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo12Component } from './lib93-demo12.component';

describe('Lib93Demo12Component', () => {
  let component: Lib93Demo12Component;
  let fixture: ComponentFixture<Lib93Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
