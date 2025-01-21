import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo12Component } from './lib29-demo12.component';

describe('Lib29Demo12Component', () => {
  let component: Lib29Demo12Component;
  let fixture: ComponentFixture<Lib29Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
