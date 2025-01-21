import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo14Component } from './lib17-demo14.component';

describe('Lib17Demo14Component', () => {
  let component: Lib17Demo14Component;
  let fixture: ComponentFixture<Lib17Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
