import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo35Component } from './lib42-demo35.component';

describe('Lib42Demo35Component', () => {
  let component: Lib42Demo35Component;
  let fixture: ComponentFixture<Lib42Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
