import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo19Component } from './lib22-demo19.component';

describe('Lib22Demo19Component', () => {
  let component: Lib22Demo19Component;
  let fixture: ComponentFixture<Lib22Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
