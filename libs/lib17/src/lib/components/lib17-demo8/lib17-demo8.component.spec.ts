import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo8Component } from './lib17-demo8.component';

describe('Lib17Demo8Component', () => {
  let component: Lib17Demo8Component;
  let fixture: ComponentFixture<Lib17Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
