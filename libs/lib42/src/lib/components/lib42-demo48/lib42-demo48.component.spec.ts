import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo48Component } from './lib42-demo48.component';

describe('Lib42Demo48Component', () => {
  let component: Lib42Demo48Component;
  let fixture: ComponentFixture<Lib42Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
