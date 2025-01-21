import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo3Component } from './lib22-demo3.component';

describe('Lib22Demo3Component', () => {
  let component: Lib22Demo3Component;
  let fixture: ComponentFixture<Lib22Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
