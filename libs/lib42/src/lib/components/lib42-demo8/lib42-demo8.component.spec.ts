import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo8Component } from './lib42-demo8.component';

describe('Lib42Demo8Component', () => {
  let component: Lib42Demo8Component;
  let fixture: ComponentFixture<Lib42Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
