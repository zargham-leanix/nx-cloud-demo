import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo6Component } from './lib22-demo6.component';

describe('Lib22Demo6Component', () => {
  let component: Lib22Demo6Component;
  let fixture: ComponentFixture<Lib22Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
