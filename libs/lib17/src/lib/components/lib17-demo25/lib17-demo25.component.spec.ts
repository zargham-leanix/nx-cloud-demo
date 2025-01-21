import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo25Component } from './lib17-demo25.component';

describe('Lib17Demo25Component', () => {
  let component: Lib17Demo25Component;
  let fixture: ComponentFixture<Lib17Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
