import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo19Component } from './lib17-demo19.component';

describe('Lib17Demo19Component', () => {
  let component: Lib17Demo19Component;
  let fixture: ComponentFixture<Lib17Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
