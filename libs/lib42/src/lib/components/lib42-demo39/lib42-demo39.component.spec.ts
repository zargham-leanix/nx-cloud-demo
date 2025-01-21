import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo39Component } from './lib42-demo39.component';

describe('Lib42Demo39Component', () => {
  let component: Lib42Demo39Component;
  let fixture: ComponentFixture<Lib42Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
