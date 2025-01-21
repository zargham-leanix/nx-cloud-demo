import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo39Component } from './lib21-demo39.component';

describe('Lib21Demo39Component', () => {
  let component: Lib21Demo39Component;
  let fixture: ComponentFixture<Lib21Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
