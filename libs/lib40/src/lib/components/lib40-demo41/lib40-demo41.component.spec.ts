import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo41Component } from './lib40-demo41.component';

describe('Lib40Demo41Component', () => {
  let component: Lib40Demo41Component;
  let fixture: ComponentFixture<Lib40Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
