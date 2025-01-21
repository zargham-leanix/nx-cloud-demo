import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo46Component } from './lib90-demo46.component';

describe('Lib90Demo46Component', () => {
  let component: Lib90Demo46Component;
  let fixture: ComponentFixture<Lib90Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
