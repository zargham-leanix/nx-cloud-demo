import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo31Component } from './lib17-demo31.component';

describe('Lib17Demo31Component', () => {
  let component: Lib17Demo31Component;
  let fixture: ComponentFixture<Lib17Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
