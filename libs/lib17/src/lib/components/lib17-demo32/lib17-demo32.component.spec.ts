import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo32Component } from './lib17-demo32.component';

describe('Lib17Demo32Component', () => {
  let component: Lib17Demo32Component;
  let fixture: ComponentFixture<Lib17Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
