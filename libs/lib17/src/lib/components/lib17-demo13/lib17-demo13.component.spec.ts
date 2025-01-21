import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo13Component } from './lib17-demo13.component';

describe('Lib17Demo13Component', () => {
  let component: Lib17Demo13Component;
  let fixture: ComponentFixture<Lib17Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
