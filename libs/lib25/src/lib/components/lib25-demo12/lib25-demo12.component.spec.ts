import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo12Component } from './lib25-demo12.component';

describe('Lib25Demo12Component', () => {
  let component: Lib25Demo12Component;
  let fixture: ComponentFixture<Lib25Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
