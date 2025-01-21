import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo19Component } from './lib90-demo19.component';

describe('Lib90Demo19Component', () => {
  let component: Lib90Demo19Component;
  let fixture: ComponentFixture<Lib90Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
