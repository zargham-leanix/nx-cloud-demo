import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo10Component } from './lib17-demo10.component';

describe('Lib17Demo10Component', () => {
  let component: Lib17Demo10Component;
  let fixture: ComponentFixture<Lib17Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
