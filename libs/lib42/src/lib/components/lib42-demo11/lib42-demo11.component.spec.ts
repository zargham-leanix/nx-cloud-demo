import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo11Component } from './lib42-demo11.component';

describe('Lib42Demo11Component', () => {
  let component: Lib42Demo11Component;
  let fixture: ComponentFixture<Lib42Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
