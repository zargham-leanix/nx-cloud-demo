import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo48Component } from './lib17-demo48.component';

describe('Lib17Demo48Component', () => {
  let component: Lib17Demo48Component;
  let fixture: ComponentFixture<Lib17Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
