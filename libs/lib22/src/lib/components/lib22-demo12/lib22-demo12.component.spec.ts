import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo12Component } from './lib22-demo12.component';

describe('Lib22Demo12Component', () => {
  let component: Lib22Demo12Component;
  let fixture: ComponentFixture<Lib22Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
