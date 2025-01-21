import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo25Component } from './lib42-demo25.component';

describe('Lib42Demo25Component', () => {
  let component: Lib42Demo25Component;
  let fixture: ComponentFixture<Lib42Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
