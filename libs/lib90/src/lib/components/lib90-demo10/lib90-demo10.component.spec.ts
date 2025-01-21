import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo10Component } from './lib90-demo10.component';

describe('Lib90Demo10Component', () => {
  let component: Lib90Demo10Component;
  let fixture: ComponentFixture<Lib90Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
