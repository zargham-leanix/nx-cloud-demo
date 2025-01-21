import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo29Component } from './lib17-demo29.component';

describe('Lib17Demo29Component', () => {
  let component: Lib17Demo29Component;
  let fixture: ComponentFixture<Lib17Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
