import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo39Component } from './lib23-demo39.component';

describe('Lib23Demo39Component', () => {
  let component: Lib23Demo39Component;
  let fixture: ComponentFixture<Lib23Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
