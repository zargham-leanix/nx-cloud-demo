import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo12Component } from './lib59-demo12.component';

describe('Lib59Demo12Component', () => {
  let component: Lib59Demo12Component;
  let fixture: ComponentFixture<Lib59Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
