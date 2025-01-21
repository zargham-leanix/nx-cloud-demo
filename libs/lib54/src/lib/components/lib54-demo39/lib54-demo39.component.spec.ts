import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo39Component } from './lib54-demo39.component';

describe('Lib54Demo39Component', () => {
  let component: Lib54Demo39Component;
  let fixture: ComponentFixture<Lib54Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
