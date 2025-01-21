import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo35Component } from './lib17-demo35.component';

describe('Lib17Demo35Component', () => {
  let component: Lib17Demo35Component;
  let fixture: ComponentFixture<Lib17Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
