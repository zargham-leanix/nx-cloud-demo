import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo2Component } from './lib17-demo2.component';

describe('Lib17Demo2Component', () => {
  let component: Lib17Demo2Component;
  let fixture: ComponentFixture<Lib17Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
