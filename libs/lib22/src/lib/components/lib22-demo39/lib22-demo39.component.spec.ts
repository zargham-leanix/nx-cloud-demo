import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo39Component } from './lib22-demo39.component';

describe('Lib22Demo39Component', () => {
  let component: Lib22Demo39Component;
  let fixture: ComponentFixture<Lib22Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
