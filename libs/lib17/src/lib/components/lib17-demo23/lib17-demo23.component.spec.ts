import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo23Component } from './lib17-demo23.component';

describe('Lib17Demo23Component', () => {
  let component: Lib17Demo23Component;
  let fixture: ComponentFixture<Lib17Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
