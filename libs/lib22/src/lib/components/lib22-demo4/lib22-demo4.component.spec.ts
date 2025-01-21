import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo4Component } from './lib22-demo4.component';

describe('Lib22Demo4Component', () => {
  let component: Lib22Demo4Component;
  let fixture: ComponentFixture<Lib22Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
