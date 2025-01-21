import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo39Component } from './lib27-demo39.component';

describe('Lib27Demo39Component', () => {
  let component: Lib27Demo39Component;
  let fixture: ComponentFixture<Lib27Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
