import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo39Component } from './lib83-demo39.component';

describe('Lib83Demo39Component', () => {
  let component: Lib83Demo39Component;
  let fixture: ComponentFixture<Lib83Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
