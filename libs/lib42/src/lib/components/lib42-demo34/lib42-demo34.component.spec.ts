import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo34Component } from './lib42-demo34.component';

describe('Lib42Demo34Component', () => {
  let component: Lib42Demo34Component;
  let fixture: ComponentFixture<Lib42Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
