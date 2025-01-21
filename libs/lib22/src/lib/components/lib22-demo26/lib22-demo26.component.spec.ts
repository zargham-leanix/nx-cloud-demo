import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo26Component } from './lib22-demo26.component';

describe('Lib22Demo26Component', () => {
  let component: Lib22Demo26Component;
  let fixture: ComponentFixture<Lib22Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
