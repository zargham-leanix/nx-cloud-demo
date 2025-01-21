import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo22Component } from './lib89-demo22.component';

describe('Lib89Demo22Component', () => {
  let component: Lib89Demo22Component;
  let fixture: ComponentFixture<Lib89Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
