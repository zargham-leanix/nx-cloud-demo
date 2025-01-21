import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo44Component } from './lib22-demo44.component';

describe('Lib22Demo44Component', () => {
  let component: Lib22Demo44Component;
  let fixture: ComponentFixture<Lib22Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
