import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo12Component } from './lib40-demo12.component';

describe('Lib40Demo12Component', () => {
  let component: Lib40Demo12Component;
  let fixture: ComponentFixture<Lib40Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
