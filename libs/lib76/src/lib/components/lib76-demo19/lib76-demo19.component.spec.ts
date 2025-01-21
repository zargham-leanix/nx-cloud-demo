import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo19Component } from './lib76-demo19.component';

describe('Lib76Demo19Component', () => {
  let component: Lib76Demo19Component;
  let fixture: ComponentFixture<Lib76Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
