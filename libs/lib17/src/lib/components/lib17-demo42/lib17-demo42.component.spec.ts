import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo42Component } from './lib17-demo42.component';

describe('Lib17Demo42Component', () => {
  let component: Lib17Demo42Component;
  let fixture: ComponentFixture<Lib17Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
